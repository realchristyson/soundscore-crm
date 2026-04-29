import { NextRequest, NextResponse } from 'next/server';

const GHL_API_KEY = process.env.GHL_MUSICADLAB_API_KEY!;
const GHL_LOCATION_ID = 'OYNXxEs0tfmO7SvauRii';
const GHL_API_BASE = 'https://services.leadconnectorhq.com';

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return NextResponse.json({ error: 'name and email required' }, { status: 400 });
    }

    const firstName = name.split(' ')[0];
    const lastName = name.split(' ').slice(1).join(' ') || '';

    // Create or update contact in GHL
    const contactRes = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28',
      },
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        firstName,
        lastName,
        email,
        tags: ['$5/Day Buyer'],
        source: 'musicadlab.com',
      }),
    });

    if (!contactRes.ok) {
      const err = await contactRes.text();
      console.error('GHL contact upsert failed:', err);
      return NextResponse.json({ error: 'GHL contact creation failed', detail: err }, { status: 500 });
    }

    const contact = await contactRes.json();

    return NextResponse.json({
      success: true,
      contactId: contact.contact?.id,
    });
  } catch (err) {
    console.error('notify-ghl error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'GHL notification failed' },
      { status: 500 }
    );
  }
}

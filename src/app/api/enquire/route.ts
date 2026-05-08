import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const filePath = path.join(process.cwd(), 'data', 'leads.json');

    // 1. Read existing leads
    const fileData = await fs.readFile(filePath, 'utf8');
    const leads = JSON.parse(fileData);

    // 2. Append new lead with timestamp
    const newLead = { ...body, id: Date.now(), date: new Date().toISOString() };
    leads.push(newLead);

    // 3. Write back to flat-file
    await fs.writeFile(filePath, JSON.stringify(leads, null, 2));

    // 4. (Optional) Trigger EmailJS/Resend here
    // await sendEmailNotification(newLead);

    return NextResponse.json({ success: true, message: "Enquiry logged successfully" });
  } catch (error) {
    return NextResponse.json({ success: false, error: "System failed to log enquiry" }, { status: 500 });
  }
}
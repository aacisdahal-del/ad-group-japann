import { NextResponse } from 'next/server';

/**
 * AD GROUP JAPAN - Enquiry API
 * NOTE: For GitHub Pages (Static Export), this route will NOT be executed.
 * You should use a service like Formspree or Web3Forms in your frontend.
 */

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // In a server environment, you would save 'body' to a database here.
    // For GitHub Pages, we recommend handling the submission directly 
    // from the frontend EnquiryHub.tsx to an external provider.

    console.log("Enquiry received:", body);

    return NextResponse.json({
      success: true,
      message: 'Enquiry received successfully',
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, error: 'Failed to process enquiry' },
      { status: 500 }
    );
  }
}

// Optional: GET handler if you ever use a real DB
export async function GET() {
  return NextResponse.json({ message: "API is active. Use POST to submit enquiries." });
}
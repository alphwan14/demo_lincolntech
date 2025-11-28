import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 're_9rwRTcSp_NfV3vztmAW84gzhkCVcB3Ctz')

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Get recipient email from environment variable, default to alphwan14@gmail.com
    const recipientEmail = process.env.TO_EMAIL || 'alphwan14@gmail.com'

    // Sanitize inputs to prevent XSS
    const sanitize = (str: string) => {
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
    }

    const sanitizedName = sanitize(name)
    const sanitizedEmail = sanitize(email)
    const sanitizedCompany = company ? sanitize(company) : ''
    const sanitizedMessage = sanitize(message.replace(/\n/g, '<br>'))

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Demo Portal <onboarding@resend.dev>',
      to: [recipientEmail],
      reply_to: email,
      subject: `Demo Request from ${sanitizedName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0a0a0a; color: #ffffff;">
          <h2 style="color: #00f0ff; margin-bottom: 20px; font-size: 24px;">New Demo Request</h2>
          <div style="background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 10px; border: 1px solid rgba(255, 255, 255, 0.1);">
            <p style="margin: 10px 0; line-height: 1.6;"><strong style="color: #00f0ff;">Name:</strong> ${sanitizedName}</p>
            <p style="margin: 10px 0; line-height: 1.6;"><strong style="color: #00f0ff;">Email:</strong> <a href="mailto:${sanitizedEmail}" style="color: #00f0ff; text-decoration: none;">${sanitizedEmail}</a></p>
            ${sanitizedCompany ? `<p style="margin: 10px 0; line-height: 1.6;"><strong style="color: #00f0ff;">Company:</strong> ${sanitizedCompany}</p>` : ''}
            <p style="margin: 10px 0; line-height: 1.6;"><strong style="color: #00f0ff;">Message:</strong></p>
            <p style="margin: 10px 0; padding: 10px; background: rgba(255, 255, 255, 0.03); border-radius: 5px; line-height: 1.6; white-space: pre-wrap;">${sanitizedMessage}</p>
          </div>
          <p style="margin-top: 20px; color: #888; font-size: 12px;">This email was sent from the Lincoln Tech Demo Portal</p>
        </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email', details: error },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error in send-email route:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}


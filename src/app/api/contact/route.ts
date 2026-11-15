import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, message } = body;

    // Strict validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Veuillez renseigner un nom valide (au moins 2 caractères).' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Veuillez renseigner une adresse email valide.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return NextResponse.json(
        { error: 'Veuillez décrire brièvement votre projet ou votre besoin.' },
        { status: 400 }
      );
    }

    // In a production backend, this would trigger an email / n8n webhook / database insertion
    const leadPayload = {
      id: `lead_${Date.now()}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      projectType: projectType || 'Non spécifié',
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        message: 'Votre message a été transmis avec succès. Tobias reviendra vers vous sous 24h.',
        leadId: leadPayload.id,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Une erreur interne est survenue lors de l’envoi.' },
      { status: 500 }
    );
  }
}

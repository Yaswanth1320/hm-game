import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Get difficulty from query parameter
    const { searchParams } = new URL(request.url);
    const difficulty = searchParams.get('difficulty') || 'medium';
    
    // Read the words.json file
    const filePath = path.join(process.cwd(), 'src/data/words.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    // Return words based on difficulty
    if (difficulty === 'easy' || difficulty === 'medium' || difficulty === 'hard') {
      return NextResponse.json({ words: data[difficulty] });
    } else {
      // Default to medium if invalid difficulty
      return NextResponse.json({ words: data.medium });
    }
  } catch (error) {
    console.error('Error reading words file:', error);
    return NextResponse.json(
      { error: 'Failed to load words' },
      { status: 500 }
    );
  }
}
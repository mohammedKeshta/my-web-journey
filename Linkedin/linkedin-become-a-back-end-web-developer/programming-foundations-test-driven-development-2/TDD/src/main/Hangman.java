package main;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

public class Hangman {

	public static final int MAX_TRIAL = 10;
	Set<String> usedWords = new HashSet<String>();
	ArrayList<String> wordsList = new ArrayList<String>();
	public int remainingTrials;
	public int score;

	/**
	 * countAlphabet takes a word and an alphabet and returns the number of
	 * times the alphabet appears in the word
	 * 
	 * @param word
	 * @param alphabet
	 * @return
	 */
	public int countAlphabet(String word, char alphabet) {
		int result = 0;

		for (char c : word.toCharArray()) {
			if (c == alphabet)
				result++;
		}
		return result;
	}

	public String fetchWord(int requestedLength) {
		remainingTrials = MAX_TRIAL;
		for (String word : wordsList) {
			if (word.length() != requestedLength)
				continue;
			else if (usedWords.add(word))
				return word;
		}
		return null;
	}

	public void loadWords() {
		try {
			BufferedReader bufferedReader = new BufferedReader(new FileReader(
					"WordSource.txt"));
			String word = null;
			while (bufferedReader.ready()) {
				word = bufferedReader.readLine();
				wordsList.add(word);
			}
			bufferedReader.close();

		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	public String fetchClue(String word) {
		StringBuilder clue = new StringBuilder();
		char[] charArray = word.toCharArray();
		for (int i = 0; i < charArray.length; i++) {
			clue.append("-");
		}
		return clue.toString();
	}

	public String fetchClue(String word, String clue, char guess) {
		remainingTrials--;
		if (guess >= 'A' && guess <= 'Z')
			guess += 32;
		if (guess < 'a' || guess > 'z')
			throw new IllegalArgumentException("Invalid character");

		StringBuilder newClue = new StringBuilder();
		char[] charArray = word.toCharArray();
		for (int i = 0; i < charArray.length; i++) {
			if (word.charAt(i) == guess && clue.charAt(i) != guess) {
				newClue.append(guess);
				score += (int) MAX_TRIAL / word.length();
			} else {
				newClue.append(clue.charAt(i));
			}
		}
		return newClue.toString();
	}
}

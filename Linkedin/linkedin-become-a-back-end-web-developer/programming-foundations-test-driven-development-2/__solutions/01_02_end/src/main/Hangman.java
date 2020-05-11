package main;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

public class Hangman {

	Set<String> usedWordsSet = new HashSet<>();
	/**countAlphabet takes a word and an alphabet
	 * and returns the number of times the alphabet
	 * appears in the word
	 * @param word
	 * @param alphabet
	 * @return
	 */
	public int countAlphabet(String word, char alphabet) {
		int result = 0;
		
		for (char c : word.toCharArray()) {
			if (c == alphabet) result++;
		}
		return result;
	}

	public String fetchWord() {
		return "pizza";
	}

	public String fetchWord(int requestedLength) {
		String result = null;
		try (BufferedReader br = new BufferedReader(new FileReader("WordSource.txt"))) {
			while ((result = br.readLine()) != null) {
				if (result.length() != requestedLength) continue;
				else if (usedWordsSet.add(result)) break;
			}
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return result;
		
	}




}

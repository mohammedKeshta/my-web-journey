import { promises as fsPromise } from "fs"
import path from "path"

/*
 * File System Flags are used for identifying read/write operations available when opening a file.
 * r   => allows for the reading of a file
 * r+  => allows for the reading and writing of a file, will overwrite content in the file
 * w+  => allows for the reading and writing of a file, will create a file if it does not yet exist
 * a   => allows for reading and writing of a file, will append new content to the end of the file, not overwriting current content
 * a+  => allows for reading and writing of a file, will create a file if it does not yet exist,
 *        and will append new content to the end of the file, not overwriting current content
 * .open() - Used to open a file. Takes a filename and flag as arguments.
 * .write() - Used to write to a file that is already open. Takes data, and options as arguments.
 * .writeFile() - Used to write to a file, overwriting any content that may already exist in the file. Takes a filename, data, and options as arguments.
 * .read() - Used to read a file. The file must be opened first. Allows for reading only a portion of a file, but requires the creation of a buffer to do so
 * .readFile() - Used to read the entire contents of a file.
 * .rename() - Used to rename or move a file. Takes the old file path and new file path as arguments.
 * .mkdir() - Used to make new directories. Takes a directory path as an argument.
 * .unlink() - Used to remove a file. Takes a file path as an argument.
 * .rmdir() - Used to remove an empty directory. Takes a directory path as an argument.
 */

const groceryFilePath = path.resolve(__dirname, "groceries.csv")

const readFile = async (filePath: string): Promise<void> => {
  try {
    const fileData = await fsPromise.readFile(filePath)
    console.log(fileData.toString())
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`)
  }
}

const writeFile = async (filePath: string): Promise<void> => {
  try {
    const csvHeaders = "name,quantity,price"
    await fsPromise.writeFile(filePath, csvHeaders)
  } catch (error) {
    console.log(`Got an error trying to write the file: ${error.message}`)
  }
}

const addGroceryItem = async (
  filePath: string,
  name: string,
  quantity: number,
  price: number
): Promise<void> => {
  try {
    await fsPromise.writeFile(filePath, `\n${name},${quantity},${price}`, { flag: "a" })
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`)
  }
}

readFile(path.resolve(__dirname, "greetings.txt"))
writeFile(groceryFilePath)
addGroceryItem(groceryFilePath, "eggs", 12, 1.5)
addGroceryItem(groceryFilePath, "nutella", 1, 4)

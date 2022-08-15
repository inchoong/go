# markdown-more concise and more efficient
=================================================

It is strongly recommended that developers read this document carefully and master the powerful support of md and HBuilderX for md.
_In a narrow screen, you can press Alt+wheel to scroll horizontally_

Many people only use markdown to publish online articles, which spoils markdown.
Markdown is not only a simplified version of HTML, but more importantly, an upgraded version of txt, a lightweight version of word, and the best carrier for notes.
As a simple format markup language, it is different from the plain format of txt, the complex markup of HTML, and the mouse adjustment style of word. Markdown can quickly define the style of the document by simply typing a few characters.
For example, typing a "#" at the beginning of a line defines this line as a level 1 heading, and has intuitive and perfect coloring in HBuilderX, so that it does not need to be published as a web page and can be used as Word.
Master markdown, you can completely abandon the editor of txt and note-taking software, and replace Word in most scenarios,becauseof Word is complex and bloated. Enjoy the beauty of simplicity and improve efficiency.
And HBuilderX can be called the most powerful markdown writing tool.

The following example lists markdown syntax and corresponding HBuilderX usage skills:

Before you start, you can press the shortcut key Alt+w (Ctrl+w for Mac) to browse the outline of this article.

# Title syntax
The title of markdown starts with # at the beginning of the line and is separated by spaces. Titles of different levels are colored differently in HX. as follows:
# Title 1
## Title 2
### Title 3
#### Title 4
##### Title 5
###### Title 6

Tips for using the title:
1. Emmet quick input: hit h2+Tab to generate a secondary title [same as emmet in HTML, not only title, all markdown grammars in HX that can correspond to tags support emmet writing]. Only effective at the beginning of the line
2. Smart double-click: double-click the # sign to select the entire heading paragraph
3. Intelligent carriage return: After carriage return at the end of the line or Ctrl+Enter in the line to force a new line, it will automatically add # on the next line. And after two consecutive carriage returns, the # will be automatically filled out. (Experience the same as word)
4. After entering, press Tab again to advance one level of headings, and press Tab again to switch list symbols
5. Press Enter after # to insert an empty title line [the same as Word], or press Ctrl+Shift+Enter at any position to insert an empty title line
6. fold:
	- Click the-sign in front of the title to collapse the title paragraph. The shortcut key is Alt+- (Alt+= to expand and collapse)
	- When folding or unfolding sub-nodes in multiple layers, the shortcut key is Alt+Shift+- or =
	- Full text collapsed or expanded, the shortcut key is Ctrl+Alt+Shift+- or =
	- To collapse other areas, the shortcut key is Alt+Shift+o. This is very useful for long document management, you can focus on the current chapter
	- These functions can be found at any time in the menu-jump-collapse

# List
Markdown lists support ordered lists, unordered lists, and special task lists.
Also add a special symbol before the line, followed by the list text content after a space.

## Ordered List
An ordered list is an ordered list, relying on the order of the numbers in front of the line.
1. Ordered list 1 [Shortcut keys for setting or canceling ordered list symbols: Ctrl+Alt+1, select multi-line batch setting sequence number; support multi-cursor batch setting list symbols, that is, press Ctrl+left mouse button to add multiple cursors]
2. Ordered list 2 [After the list is entered, the serial number will be automatically supplemented]
4. Ordered list 3 [Smart double-click: double-click the number in front to re-order the numbers, correct the serial number error, and select the sequenced list paragraph (the 4 on the left is deliberately wrong for you to experience)]

## Unordered List
An unordered list means that the list is not sorted, and the unordered list is more widely used because of its arbitrary writing.
There are 3 kinds of prefixes for unordered lists, and HX is used to indicate the level 1 list, the level 2 list, and the level 3 list respectively.
-Unordered list 1 [Shortcut key: Ctrl+Alt+-; smart double-click: double-click-to select the entire unordered list; press Tab again to replace the second-level list symbol]
* Unordered list 2
* Emmet: Tap Tab after li to generate a list symbol of *, which takes effect at the beginning of the line
* Shortcut key: Ctrl+Alt+8 [8 is *corresponding number], supports multi-cursor batch setting of list symbols, that is, press Ctrl+left mouse button to add multiple cursors
* Smart double-click: double-click * to select the entire unordered list
* Smart Enter: Enter at the end of the line or Ctrl+Enter at the end of the line to automatically continue the list; press Enter continuously to clear the list symbol; press Tab again to change the list symbol; enter after the list symbol or Shift+ at the end of the line Enter, leave a list character on the previous line
* * Is often used in second-level lists, continue to Tab after the list symbol, you can switch the list symbol
+ Unordered list 3 [Shortcut key: Ctrl+Alt+=; often used for three-level lists; others are the same as above]

## task list
The task list is very practical, and it is very convenient to manage to-do and already done.
[] Task list-unfinished tasks [ Shortcut key: Ctrl+Alt+[ ]
[x] Task list-completed tasks [ Shortcut key: Ctrl+Alt+] ]
1. Smart double-click: double-click inside the square brackets to switch the check status, mark the task as completed or uncompleted; double-click the right side of the square bracket to select the task list paragraph
2. Intelligent carriage return: automatically supplement the task list prefix symbol after carriage return; continuously press carriage return to clear the prefix carriage; carriage return after the list symbol or Shift+ carriage return at the end of the line, leaving the list symbol on the previous line
-[] If you want to publish to web rendering, you need to add the prefix of unordered list-

The above three lists all support batch modification of list symbols. The following methods are recommended to learn and try in sequence:
1. Select multiple lines and press the shortcut key Ctrl+Alt+"1" or "-" or "[" or "]" to set list symbols in batches
2. If you need to set up an ordered or unordered list by skipping lines, click the target multiple lines (not consecutive) by Ctrl + the left mouse button to generate multiple cursors, and then press the shortcut key Ctrl + Alt + "1" or "-" or "[ "Or "]", you can skip to set the list symbol, especially for ordered lists, the number will also skip and increase by 1
3. Press Alt+mouse to select the column at the beginning of the row (column selection), so that there is a cursor in the capital of each row, and then type or delete the list symbol to perform batch operations
4. Select multiple lines, press the shortcut key Ctrl+Shift+\ (actually Ctrl+|), you can add a cursor at the beginning of each line

## Citation list
> Reference 1
> Reference 2
Shortcut key: Ctrl+Alt+Shift+.
Smart double-click: double-click the > to select the entire quote list
Intelligent carriage return: the list will be automatically continued after a carriage return at the end of the line or forced line feed by Ctrl+Enter in the row; continuous pressing of carriage return will clear the list character; carriage return after the list sign or Shift+ carriage return at the end of the line, leaving the list sign on the previous line

# Text style grammar
**Bold** [Shortcut key: Ctrl+B, support multiple cursors; Emmet: press Tab after b]
__Bold2__
_Tilt_[Emmet: press Tab after i; surround around: select text and press Ctrl+\ to add cursors on both sides of the selection, you can continue typing_]
*tilt*
~~Strikethrough~~
``` One-line code ```
Bracket insert: first select the text content, and then press _*~` and other symbols, it will automatically surround the 2 sides
Smart double-click: Double-click the definition symbol in front of the grammar area to select the entire text containing the definition symbol
De-enclosure: After selecting the entire text, press Ctrl+Shift+] to remove the enclosing symbols on both sides

Although quotation brackets marks is not part of markdown syntax, it also support the same enclosing, selection, and de-enclosure operations.
The smart double-click selection of quotation mark brackets is slightly special: double-click inside the quotation mark brackets to select the content in the quotation mark brackets (excluding the quotation mark brackets); press Alt+double-click the inside of the quotation mark brackets to select the entire text containing the symbol

HBuilderX also supports the following methods for efficient processing of text on two sides
1. Select the text and press Ctrl+\ to add cursors on both sides of the selection area, you can continue to input ~~, it will be input on both sides at the same time
2. Expand the selection to the 2 sides: [Win:Alt+Shit+→, Mac:Ctrl++Shit+→]; decrease the selection from the 2 sides inward: [Win:Alt+Shit+←, Mac:Ctrl++Shit+←]

[Link text](http://dcloud.io)
1. Emmet: Tap Tab after a
2. Open the link: Alt+click with the mouse; if it is a local file, you can open the file in another column by Shift+Alt+click
3. Smart Paste: Pasting URL will automatically become a hyperlink format; pasting a local file will also automatically create a reference link
4. Smart double-click: double-click the beginning of the grammar area, that is [on the left, select the entire text containing the delimiter

![Picture description text](logo.jpg)
1. Emmet: Tap Tab after img
2. Smart Paste: When you paste the graphics in the clipboard, it will be automatically saved as an attachment to this md document; delete the picture syntax in the document, and the corresponding picture attachment will be automatically deleted when the md document is saved; automatically become a link when pasting the picture file Citation format
3. Floating preview: move the mouse to the image grammar, the local image will be automatically displayed
4. Smart double-click: double-click the beginning of the grammar area, that is, on the left side of !, select the entire text containing the delimiter

# Table 

|		|		|		|
|--	|--	|--	|
|		|		|		|
|		|		|		|

1. Emmet: tap Tab after table3*3, which means that a table with 3 rows and 3 columns is generated, and the first row takes effect
2. md table alignment is a pain point of traditional md, press Ctrl+K to automatically organize the table format (not compatible with different zoom modes and fonts)
3. Support copying and pasting tables from excel, wps, word, number tables (not supporting merged cells and cell wrapping)

# split line
------------- [Emmet: Tap Tab after hr]
*************
=============

# Code area
``` javascript
	var a = document
```
Emmet: Tap Tab after the code, the first line will take effect
Smart double-click: double-click the beginning of the grammar area, that is, on the left side of !, select the entire text containing the delimiter
Support code direct highlighting and coloring, which should be a feature only available in HBuilderX. Note that you need to specify the language type at the beginning of the code area

# Comment
<!--Comment-->
Shortcut key: Ctrl+/
Smart double-click: double-click the delimiter at the beginning and end of the comment to select the entire comment

# Other emmet quick input
Hit Tab after day, the current date. Note that day must have a space at the beginning or in front of the line
Tap Tab after time, the current time. Note that time must have a space at the beginning or in front of the line

# Document structure diagram
When the article is very long, there is a document structure diagram in Word, and HBuilderX also has it.
Menu view-document structure diagram, shortcut key Alt+W (mac is ctrl+W), easy to manage long documents

# Run, preview and print PDF
Click the browser in the toolbar or menu to run the md file. You can use an external browser to preview the md file and it will be automatically rendered as HTML.
Click the preview [shortcut key Alt+p] in the upper right corner to preview the HTML rendering result of the md document on the right side of HBuilderX.
Click print in the browser, choose to print to PDF, md can be output to PDF format. (Note to remove the header and footer in the print options)

# One-click sharing
Markdown has a fascinating input experience, but it is not convenient to share, especially the lack of free, stable, and high-speed image beds.
[uniCloud](https://unicloud.dcloud.net.cn/) provides a free, stable, high-speed server and CDN.
HBuilderX, based on uniCloud, provides one-click sharing of markdown.

Use uniCloud's front-end web hosting to stably convert markdown into HTML web pages and publish them as online URLs. You can send the URL to anyone who wants to share.
At the same time, the pictures involved in markdown will also be automatically uploaded to the free CDN in the front-end web hosting.

For more information: [MarkDown One-Key Sharing Instructions](https://ask.dcloud.net.cn/article/37573)

# Other shortcuts that are commonly used but you may not know
-Ctrl+left mouse button to add multiple cursors, then type or paste, which can be processed in batches. Ctrl+left mouse button to drag and select, multiple selections can be selected.
-Ctrl+right mouse button to delete multiple cursors
-Press Ctrl+C or X without selecting content to copy or cut the entire line
-After selecting 2 selections, press Ctrl+Shift+X to exchange the contents of the selections. If there is no selection area but only 2 cursors, then 2 rows will be swapped
-Ctrl+up and down keys can move up and down lines
-Ctrl+Insert can repeatedly insert the current row, if there is a selected content, can repeatedly insert the selected content
-Ctrl+Shift+K can merge multiple lines (it is the reverse operation of formatting Ctrl+K)
- delete
* Press Ctrl+D to delete the selected line, support multiple cursors
* Shift+Del delete to the end of the line
* Shift+Backspace delete to the beginning of the line
- choose
* Ctrl+E to select the same word (mac is Command+D), press continuously to select multiple words for further operation, which is more convenient than replacement
* Ctrl+L can select multiple lines, Ctrl+Shift+L also selects lines, but does not select the blank characters at the beginning and end of the line
* Ctrl+= can zoom in the selection step by step
* Double-click the title and list symbol to select the corresponding paragraph
* Double-click the inside of the quotation marks and brackets to select the inner content
* Double-click the indent to select the same indented paragraph
* Double-click the hyphen such as-or _ to select the connected words, such as double-click here to try, uni-app
-Find
* Ctrl+P to find files
* Ctrl+Alt+F can search for specified keywords in all documents in the current directory (mac is Command+Shift+f)
* Select the text and press F3 to find the next one, Shift+F3 to find the previous one
- Cloud synchronization: HBuilderX+markdown is used for cloud synchronization of notes, please refer to [http://ask.dcloud.net.cn/article/13097](http://ask.dcloud.net.cn/article/13097)

Have you learned it all?
Markdown grammar is actually very simple, you can master it in half an hour.
But HBuilderX requires repeated practice, mastering these skills proficiently, you will become an efficient geek!


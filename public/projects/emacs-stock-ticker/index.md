# Emacs Stock Ticker

[Source Code](https://github.com/midimaster21b/emacs-stock-tracker)

I initially became interested in, and began engaging with, stock trading in 2016 and I wanted a way to watch the stocks I was interested in while I was developing at work. I also wanted a project to help me dive into Emacs lisp. The result was this major mode that displays a ticker symbol and it's current price in the mode line.

The code provides a means for specifying multiple different ticker symbols that are iterated through at a user selectable rate[True?]. The major mode uses an API to retrieve the realtime value of each of the specified stocks.

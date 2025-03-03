# highlight.php

*highlight.php* is a server side code highlighter written in PHP that currently supports 185 languages. It's a port of [highlight.js](http://www.highlightjs.org) by Ivan Sagalaev that makes full use of the language and style definitions of the original JavaScript project.

The original highlight.js and highlight.php implement highlighting by means of css classes, for use in html.

[geekdevs/highlight.php](https://github.com/geekdevs/highlight.php) is a fork that supports using ansi escape sequences
for CLI colors in addition to CSS classes, but it does not (at time of writing) define a useful set of default colors.

dan-da/highlight.php is a fork that implements a (partial) default set of CLI colors and really only cares about that.

If you do not need CLI (ansi) colors, you should stick with one of the other forks.


## Installation + Setup

The recommended approach is to install the project through [Composer](https://getcomposer.org/).

```bash
composer require dan-da/highlight.php
```

If you're not using Composer, ensure that the classes defined in the `Highlight` namespace can be found either by inclusion or by an autoloader. A trivial autoloader for this purpose is included in this project as `Highlight\Autoloader.php`

## Usage

### CLI Highlighting

```
    $jsonbuf = json_encode( ['age': 10, 'weight': 90] );
    $highlighter = new \Highlight\Highlighter(
            new \Highlight\Decorator\StatefulCliDecorator([])
    );
    echo $highlighter->highlight('json', $jsonbuf)->value;
```


The `Highlight\Highlighter` class contains the highlighting functionality. You can choose between two highlighting modes:

1. explicit mode
2. automatic language detection mode

### Explicit Mode

In explicit mode, you must define which language you will be highlighting as.

```php
// Instantiate the Highlighter.
$hl = new Highlight\Highlighter();
$code = file_get_contents('some_ruby_script.rb');

try {
    // Highlight some code.
    $highlighted = $hl->highlight('ruby', $code);

    echo "<pre class=\"hljs {$highlighted->language}\">\n";
    echo $highlighted->value . "\n";
    echo "</pre>\n";
}
catch (DomainException $e) {
    // This is thrown if the specified language does not exist

    echo "<pre>\n";
    echo $code . "\n";
    echo "</pre>\n";
}
```

### Automatic Language Detection Mode

Alternatively you can use the automatic detection mode, which highlights your code with the language the library thinks is best.

> **Warning:** You must supply a list of languages that the `Highlighter` will pick from. This occurs in a brute force fashion and the language with the most accurate result will be selected. This is extremely inefficient as you supply more languages and may not always be 100% accurate.
>
> It is highly recommended you explicitly choose the language or limit the number of languages to automatically detect to reduce the number of inaccuracies.

```php
$hl = new Highlight\Highlighter();
$hl->setAutodetectLanguages(array('ruby', 'python', 'perl'));

$highlighted = $hl->highlightAuto(file_get_contents('some_ruby_script.rb'));

echo "<pre class=\"hljs {$highlighted->language}\">\n";
echo $highlighted->value . "\n";
echo "</pre>\n";
```

### Stylesheets

The same stylesheets available in the **highlight.js** project are available in the `styles` directory of this project and may be included in your own CSS or made accessible to your web server.

## Versioning

This project will follow the same version numbers as the highlight.js project with regards to languages, meaning that a language definition available in highlight.js 9.12.0 will be available in highlight.php 9.12.0. However, there are times where bugs may arise in this project or its translated definition files, so there'll be one more number appended to the version number. For example, version 9.12.0.1 will contain all of the same languages as highlight.js 9.12.0 but also contain fixes solely to this project. This is done so this project can have version bumps without conflicts should highlight.js release version 9.12.1.

### Backward Compatibility Promise

Despite the fact that the semantic versioning used in this project mirrors that of highlight.js, this project will adhere to [Symfony's Backward Compatibility Promise](https://symfony.com/doc/current/contributing/code/bc.html#using-symfony-code). You can rest assured that there will be no breaking changes during `9.x` and any deprecations will be marked with `@deprecated` and won't be removed until the next major release.

## Some History

Dan Libby
June 26, 2019

Forked from geekdevs/highlight.php to add default CLI color scheme.

Geert Bergman
Sep 30, 2013

JavaScript code highlighting is very convenient and in many cases just what you want to use. Especially for programming blogs I would not advice you to use otherwise. But there are occasions where you're better off with a more 'static' approach, for instance if you want to send highlighted code in an email or for API documents. For this I needed a code highlighting program preferably written in PHP.

I couldn't found any satisfactory PHP solution so I decided to port one from JavaScript. After some comparison of different highlighting programs based on license, technology, language support [highlight.js](http://www.highlightjs.org) came out most favorable in my opinion.

It was my decision not to make a PHP highlighter but to do a port of highlight.js, these are different things. The goal was to make it work exactly as [highlight.js](http://www.highlightjs.org) to make as much use as possible of the language definitions and CSS files of the original program.

Happy coding!

## LICENSE

[BSD](./LICENSE.md)

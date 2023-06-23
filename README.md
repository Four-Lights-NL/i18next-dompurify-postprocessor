# i18next DOMPurify Postprocessor

This is a postprocessor for the i18next internationalization framework that integrates with the DOMPurify library. It provides a post-processing functionality to sanitize HTML content in translations using DOMPurify.

## Installation

You can install the i18next DOMPurify plugin via npm:

```bash
npm install i18next-dompurify-plugin
```

## Usage

To use the i18next DOMPurify plugin, you need to import it and initialize it alongside your i18next configuration.

```javascript
import i18next from 'i18next';
import dompurify from 'i18next-dompurify-postprocessor';

// (Optional) Change the settings passed to DOMPurify
// the below settings are the default ones
dompurify.setOptions({
  ALLOWED_TAGS: ['a', 'b', 'br', 'code', 'em', 'i', 'li', 'ol', 'p', 'strong', 'ul', 'h1', 'h2', 'h3'],
  ALLOWED_ATTR: ['style', 'class']
});

// Import and initialize the plugin
i18next.use(dompurify);

// Configure i18next as usual
i18next.init({
    // ...
    postProcess: ['dompurify'], // Only if you want to use the plugin globally
});
```

### Options

The plugin provides options to customize the sanitization process. By default, the following options are set:

```javascript
{
  ALLOWED_TAGS: ['a', 'b', 'br', 'code', 'em', 'i', 'li', 'ol', 'p', 'strong', 'ul'],
  ALLOWED_ATTR: ['style']
}
```

To modify these options, you can call the `setOptions` method on the plugin instance before initializing i18next:

```javascript
dompurify.setOptions({
  ALLOWED_TAGS: ['a', 'b', 'br', 'code', 'em', 'i', 'li', 'ol', 'p', 'strong', 'ul', 'h1', 'h2', 'h3'],
  ALLOWED_ATTR: ['style', 'class']
});
```

### Example

Once the plugin is set up, you can use i18next as usual.
Depending on if you configured i18next to use the postprocessor as a global plugin, the translations will be automatically sanitized by DOMPurify.

If you want to use the plugin only for specific translations, you can pass the `postProcess` option to the `t` function

```javascript
i18next.t('keyWithHTML', { postProcess: 'dompurify' });
```

Please note that this plugin should be used with caution to prevent any potential security vulnerabilities. Make sure to review and customize the allowed tags and attributes according to your specific needs.

## License

This plugin is released under the [MIT License](https://opensource.org/licenses/MIT).

export function convertIntoSlug(text: string) {
    text = text.toLowerCase();
    text = text.replace(/[^a-z0-9]+/g, '-');
    text = text.replace(/^-+|-+$/g, '');
    return text;
  }
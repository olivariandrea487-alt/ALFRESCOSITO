import { useEffect } from 'react';

export default function SourceProtection() {
  useEffect(() => {
    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const preventKeyboardShortcuts = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'U') ||
        (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.metaKey && e.key === 'U')
      ) {
        e.preventDefault();
        return false;
      }
    };

    const preventSelection = (e: Event) => {
      e.preventDefault();
      return false;
    };

    const preventCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    const preventDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('keydown', preventKeyboardShortcuts);
    document.addEventListener('selectstart', preventSelection);
    document.addEventListener('copy', preventCopy);
    document.addEventListener('cut', preventCopy);
    document.addEventListener('dragstart', preventDragStart);

    const style = document.createElement('style');
    style.textContent = `
      * {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
        -webkit-touch-callout: none !important;
      }

      input, textarea {
        -webkit-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
        user-select: text !important;
      }
    `;
    document.head.appendChild(style);

    const observer = new MutationObserver(() => {
      const devtoolsOpen = window.outerHeight - window.innerHeight > 200 ||
                          window.outerWidth - window.innerWidth > 200;
      if (devtoolsOpen) {
        document.body.innerHTML = '';
      }
    });

    observer.observe(document, {
      attributes: true,
      childList: true,
      subtree: true
    });

    return () => {
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('keydown', preventKeyboardShortcuts);
      document.removeEventListener('selectstart', preventSelection);
      document.removeEventListener('copy', preventCopy);
      document.removeEventListener('cut', preventCopy);
      document.removeEventListener('dragstart', preventDragStart);
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  return null;
}

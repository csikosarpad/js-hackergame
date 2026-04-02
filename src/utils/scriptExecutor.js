/**
 * Executes script tags that are injected via dangerouslySetInnerHTML
 * React doesn't execute scripts when using dangerouslySetInnerHTML,
 * so we need to extract and re-create them to execute properly
 */
export const executeScriptsInElement = (element) => {
    // Find all script tags in the element
    const scripts = element.querySelectorAll('script');
    scripts.forEach((originalScript) => {
        // Create a new script tag (fresh script tags will execute)
        const newScript = document.createElement('script');
        // Copy attributes
        Array.from(originalScript.attributes).forEach((attr) => {
            newScript.setAttribute(attr.name, attr.value);
        });
        // Copy the script content
        newScript.textContent = originalScript.textContent;
        // Replace the old script with the new one - this triggers execution
        originalScript.parentNode?.replaceChild(newScript, originalScript);
    });
};
//# sourceMappingURL=scriptExecutor.js.map
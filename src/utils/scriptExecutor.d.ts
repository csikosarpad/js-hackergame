/**
 * Executes script tags that are injected via dangerouslySetInnerHTML
 * React doesn't execute scripts when using dangerouslySetInnerHTML,
 * so we need to extract and re-create them to execute properly
 */
export declare const executeScriptsInElement: (element: HTMLElement) => void;
//# sourceMappingURL=scriptExecutor.d.ts.map
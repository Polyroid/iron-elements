Package.describe({
    name: 'polyroid:iron-elements',
    version: '1.0.4',
    summary: 'A set of visual and non-visual utility elements.',
    git: 'https://github.com/Polyroid/iron-elements.git',
    documentation: null
});

Package.onUse(function (api) {
    api.versionsFrom('1.2');

    api.use([
        'polyroid:iron-a11y-announcer@1.0.0',
        'polyroid:iron-a11y-keys@1.0.0',
        'polyroid:iron-a11y-keys-behavior@1.0.0',
        'polyroid:iron-ajax@1.0.0',
        'polyroid:iron-autogrow-textarea@1.0.0',
        'polyroid:iron-behaviors@1.0.0',
        'polyroid:iron-checked-element-behavior@1.0.0',
        'polyroid:iron-collapse@1.0.0',
        'polyroid:iron-component-page@1.0.0',
        'polyroid:iron-doc-viewer@1.0.0',
        'polyroid:iron-dropdown@1.0.0',
        'polyroid:iron-fit-behavior@1.0.0',
        'polyroid:iron-flex-layout@1.0.0',
        'polyroid:iron-form@1.0.0',
        'polyroid:iron-form-element-behavior@1.0.0',
        'polyroid:iron-list@1.0.0',
        'polyroid:iron-icon@1.0.0',
        'polyroid:iron-icons@1.0.0',
        'polyroid:iron-iconset@1.0.0',
        'polyroid:iron-iconset-svg@1.0.0',
        'polyroid:iron-image@1.0.0',
        'polyroid:iron-input@1.0.0',
        'polyroid:iron-jsonp-library@1.0.0',
        'polyroid:iron-localstorage@1.0.0',
        'polyroid:iron-media-query@1.0.0',
        'polyroid:iron-menu-behavior@1.0.0',
        'polyroid:iron-meta@1.0.0',
        'polyroid:iron-overlay-behavior@1.0.0',
        'polyroid:iron-pages@1.0.0',
        'polyroid:iron-range-behavior@1.0.0',
        'polyroid:iron-resizable-behavior@1.0.0',
        'polyroid:iron-selector@1.0.0',
        'polyroid:iron-signals@1.0.0',
        'polyroid:iron-test-helpers@1.0.0',
        'polyroid:iron-validatable-behavior@1.0.0',
        'polyroid:iron-validator-behavior@1.0.0',
    ], 'client');
});

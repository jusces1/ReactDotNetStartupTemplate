module.exports = {
    setupFiles: ['./setupTests.js'],
   
    transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es/.*)'],
    collectCoverage: true,
    collectCoverageFrom: [
        "**/src/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/vendor/**",
        "!**/src/registerServiceWorker.js",
        "!**/src/index.js"

    ],
    coverageDirectory: "./coverage/",
    testRegex: "(/test/.*)\\.jsx?$"
}
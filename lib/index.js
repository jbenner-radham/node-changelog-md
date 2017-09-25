'use strict';

module.exports = function changelogMd() {
    const {stripIndents} = require('common-tags');

    const template = stripIndents`
        Changelog
        =========
        All notable changes to this project will be documented in this file.

        The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
        and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

        Unreleased
        ----------
        ### Added
        - Initial release.
    `;

    return template;
};

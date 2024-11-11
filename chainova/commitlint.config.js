/**
 * Commitlint Configuration File
 * @file commitlint.config.js
 * @description This file contains the configuration for Commitlint, a tool for linting commit messages.
 */

module.exports = {
   extends: ['@commitlint/config-conventional'],
   rules: {
      // Enforce a blank line after the message body
      'body-leading-blank': [1, 'always'],
      // Limit the length of lines in the message body to 100 characters
      'body-max-line-length': [2, 'always', 100],
      // Enforce a blank line between the message body and footer
      'footer-leading-blank': [1, 'always'],
      // Limit the length of lines in the footer to 100 characters
      'footer-max-line-length': [2, 'always', 100],
      // Limit the length of the commit message header to 100 characters
      'header-max-length': [2, 'always', 100],
      // Enforce the use of lowercase letters for scopes
      'scope-case': [2, 'always', 'lower-case'],
      // Ensure that the subject is in lowercase
      'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
      // Require that the subject is not empty
      'subject-empty': [2, 'never'],
      // Disallow a full stop at the end of the subject
      'subject-full-stop': [2, 'never', '.'],
      // Enforce lowercase for commit types
      'type-case': [2, 'always', 'lower-case'],
      // Require a non-empty commit type from a specified list
      'type-empty': [2, 'never'],
      'type-enum': [
         2,
         'always',
         [
            // Build-related changes
            'build',
            // Maintenance or other changes that don't fit other categories
            'chore',
            // Continuous Integration changes
            'ci',
            // Documentation changes
            'docs',
            // New features
            'feat',
            // Bug fixes
            'fix',
            // Performance improvements
            'perf',
            // Code refactoring
            'refactor',
            // Reverting a previous commit
            'revert',
            // Code style changes
            'style',
            // Adding or updating tests
            'test',
            // Translation or internationalization changes
            'translation',
            // Security-related changes
            'security',
            // Custom commit type for changeset management (customize this as needed)
            'changeset',
            // For urgent bug fixes
            'hotfix',
            // For changes in the design or user interface.
            'design',
            // For changes in project dependencies
            'deps'
         ]
      ]
   }
}

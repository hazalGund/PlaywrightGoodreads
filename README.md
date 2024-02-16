# Playwright Goodreads e2e Automation

This framework is designed for end-to-end testing of [Goodreads](https://www.goodreads.com/) end-to-end. It's built with TypeScript and employs the Page Object Model methodology.

## Installation

Follow the steps here to get started in Playwright: [Playwright Intro](https://playwright.dev/docs/intro) 

## Usage

```terminal
npx playwright test

```

## Notes

auth.setup.ts runs before every test to make sure all tests start with an authenticated user.


data.ts serves as a central file for all data utilised within this framework. Its purpose is to consolidate information in one location, allowing for easy configuration when needed. Additionally, the baseUrl is included within this file instead of in playwright.config.ts for convenience.  

## Roadmap
The idea was to craft a framework that's practical, easy to maintain, and flexible for future expansions. Throughout my career, I've had my hands on various frameworks, polishing them up or starting from scratch. This project is more of a personal playground where I experiment with some approaches and ideas.

import { describe, expect, it } from 'vitest';
import { CONTACT_LINKS } from './profileData';
import { ADDITIONAL_PROJECTS, FEATURED_PROJECTS } from './projectData';

const allProjects = FEATURED_PROJECTS.concat(ADDITIONAL_PROJECTS);

function expectHttpsUrl(url) {
  expect(typeof url).toBe('string');
  expect(url.indexOf('https://')).toBe(0);
}

describe('portfolio project data', () => {
  it('keeps a recruiter-ready mix of featured and additional projects', () => {
    expect(FEATURED_PROJECTS.length).toBeGreaterThanOrEqual(3);
    expect(ADDITIONAL_PROJECTS.length).toBeGreaterThanOrEqual(5);
  });

  it('keeps project titles unique and required content populated', () => {
    const titles = allProjects.map((project) => project.title);
    expect(new Set(titles).size).toBe(titles.length);

    allProjects.forEach((project) => {
      expect(project.title).toBeTruthy();
      expect(project.category).toBeTruthy();
      expect(project.summary).toBeTruthy();
      expect(Array.isArray(project.stack)).toBe(true);
      expect(project.stack.length).toBeGreaterThan(0);
    });
  });

  it('keeps featured project evidence and links well formed', () => {
    FEATURED_PROJECTS.forEach((project) => {
      expect(project.number).toBeTruthy();
      expect(project.value).toBeTruthy();
      expect(Array.isArray(project.evidence)).toBe(true);
      expect(project.evidence.length).toBeGreaterThanOrEqual(3);

      if (project.github) {
        expectHttpsUrl(project.github);
        expect(project.github.indexOf('https://github.com/cbw29512/')).toBe(0);
      }

      if (project.demo) {
        expectHttpsUrl(project.demo);
        expect(project.demo.indexOf('https://cbw29512.github.io/')).toBe(0);
      }
    });
  });

  it('keeps every public additional project linked to the owned GitHub account', () => {
    ADDITIONAL_PROJECTS.forEach((project) => {
      expectHttpsUrl(project.github);
      expect(project.github.indexOf('https://github.com/cbw29512/')).toBe(0);
    });
  });
});

describe('contact data', () => {
  it('keeps contact methods unique and link-safe', () => {
    const labels = CONTACT_LINKS.map((method) => method.label);
    expect(new Set(labels).size).toBe(labels.length);

    CONTACT_LINKS.forEach((method) => {
      expect(method.label).toBeTruthy();
      expect(method.detail).toBeTruthy();
      expect(method.icon).toBeTruthy();
      expect(
        method.href.indexOf('https://') === 0 || method.href.indexOf('mailto:') === 0
      ).toBe(true);
    });
  });
});

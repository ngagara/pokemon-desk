/**
 * @jest-environment jsdom
 */
import React from 'react';
import Heading  from './index';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

describe('Heading', () => {
  let container: Element | null = null;

  beforeEach(() => {
    container = window.document.createElement('div');
    window.document.body.appendChild(container);
  });

  afterEach(() => {
    if (container !== null) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });

  it('render', () => {
    act(() => {
      render(<Heading />, container);
    });

    expect(container?.innerHTML).toBeDefined();
  });

  it('render with children', () => {
    act(() => {
      render(<Heading type={3}>Test</Heading>, container);
    });

    expect(container?.textContent).toBe('Test');
  });

  it('render with props tag ="h2', () => {
    act(() => {
      render(<Heading type={2}>Test</Heading>, container);
    });

    expect(container?.querySelector('h2')).not.toBeNull();
  });
  it('render with props tag ="h1', () => {
    act(() => {
      render(<Heading type={1}>Test</Heading>, container);
    });

    expect(container?.querySelector('h1')).not.toBeNull();
  });
  it('render with props tag ="h3', () => {
    act(() => {
      render(<Heading type={3}>Test</Heading>, container);
    });

    expect(container?.querySelector('h3')).not.toBeNull();
  });
});
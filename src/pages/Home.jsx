import React from 'react'
import { PageGuide } from 'pageguide'

export const Home = () => {

  const addButton = true;

  const pageGuideData = [
    // {
    //   title: 'PageGuide 2.0',
    //   content: '<p>When you specify no element, the popup will simply be centered on your page.</p><p>You can use HTML to add multiple paragraphs and markup.</p',
    // }, 
    {
      title: 'Single Element',
      content: 'When you specify an element, the popup will be positioned using <a href="https://popper.js.org/">popper.js</a>.<br>Default placement is at the bottom',
      element: '#first-target',
    }, 
    {
      title: 'Specified Position',
      content: 'You can specify the position of the popup, relative to the target.',
      element: '#second-target',
      position: 'right',
    }, 
    {
      title: 'Specified shape',
      content: 'You can specify the shape of the highlight of a target. You can pick from "rect" (which is the default value), "rounded_rect", "circle" or "ellipse"',
      element: '#second-target',
      shape: 'circle',
    }, 
    {
      title: 'Multiple Elements',
      content: 'When you specify multiple elements, they all get highlighted. The popup will be positioned around the first target, which is also the one that will be scrolled into view.',
      element: '.multiple-targets',
    }
  ];

const pageGuide = new PageGuide(pageGuideData, addButton);
pageGuide.start();

  return (
    <div>
      <button id="second-target">MON BOUTON</button>
    </div>
  )
}


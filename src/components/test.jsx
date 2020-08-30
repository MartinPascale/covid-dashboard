import React from 'react';
import PropTypes from 'prop-types';

const data = `{
  "tag": "ul",
  "children": [
    {
      "tag": "li",
      "text": "hello"
    },
    {
      "tag": "li",
      "text": "world"
    }
  ]
}`;

const jsonTreeToHTMLList = (data, indentation) => {
  return (
    <ul>
      {realData.children.map(({ tag, text, children }) => (
        { tag === 'ul' ? (
          <ul>
            {text}
          </ul>
          ) : (
            <li>
            {text}
            </li>
          )
        }
      ))}
    </ul>
  );
};

export default jsonTreeToHTMLList;

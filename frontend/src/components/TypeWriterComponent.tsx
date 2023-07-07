import React, { useEffect, useState } from 'react';

const TypeWriter = ({ content = '', speed = 1000 }) => {
  const [displayedContent, setDisplayedContent] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const animKey = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex >= content.length - 1) {
          clearInterval(animKey);
          return prevIndex;
        }
        const newIndex = prevIndex + 1;
        setDisplayedContent(content.substring(0, newIndex));
        return newIndex;
      });
    }, speed);

    return () => clearInterval(animKey);
  }, [content, speed]);

  return <p className=''>{displayedContent}</p>;
};

const sample_content =
  'Join us at the Department of Health Information Management, where innovation meets healthcare. Your journey to becoming a healthcare technology leader starts here!';

const TypewriterComponent = () => {
  return (
    <div>
      <TypeWriter content={sample_content} speed={20} />
    </div>
  );
};

export default TypewriterComponent;

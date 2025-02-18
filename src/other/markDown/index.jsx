import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import './index.less';

const MarkdownPreview = () => {
  const [markdownContent, setMarkdownContent] = useState('');
  const [htmlContent, setHtmlContent] = useState('');

  // 处理文件上传
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        setMarkdownContent(content);
      };
      reader.readAsText(file);
    }
  };

  // 当 markdown 内容改变时，转换为 HTML
  useEffect(() => {
    if (markdownContent) {
      const html = marked(markdownContent);
      setHtmlContent(html);
    }
  }, [markdownContent]);

  return (
    <div className="markdown-preview">
      <div className="upload-section">
        <input
          type="file"
          accept=".md,.markdown"
          onChange={handleFileUpload}
          className="file-input"
        />
      </div>
      
      <div className="preview-container">
        <div className="markdown-content">
          <h3>Markdown 内容：</h3>
          <pre>{markdownContent}</pre>
        </div>
        
        <div className="html-preview">
          <h3>HTML 预览：</h3>
          <div 
            className="preview"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>
    </div>
  );
};

export default MarkdownPreview;

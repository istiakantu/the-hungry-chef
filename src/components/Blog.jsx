import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useState } from 'react';

const Blog = () => {

    const [loader, setLoader] = useState(false);
    const downloadPDF = () => {
        const capture = document.querySelector('.convert-pdf');
        setLoader(true);
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/pnd');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            setLoader(false)
            doc.save('blog.pdf')
        })

    }

    return (
        <div className='m-4'>

            <div className='convert-pdf'>
                <h2>Question: What is the differences between uncontrolled and controlled components?</h2>
                <p className='ms-4'>Answer: An uncontrolled component is a component that renders form elements, where the form element's data is handled by the DOM. To access the input's DOM node and extract its value you can use a ref.</p>
                <p className='ms-4'>A controlled component is a component that renders form elements and controls them by keeping the form data in the component's state.</p>
                <h2>Question: How to validate React props using PropTypes?</h2>
                <p className='ms-4'>Answer:
                    In React, We can use the 'PropTypes' validate the props passed to a component. We can use that props by destructuring 'PropTypes'.</p>

                <h2>Question: What is the difference between nodejs and express js?</h2>
                <p className='ms-4'>Answer: Express.js is a web framework. Express.js provides advanced features. Express.js is a framework that extends the capabilities of Node.js.</p>
                <p className='ms-4'>Node.js is a JavaScript runtime. Node.js provides basic features. But both are often used together to build web applications</p>

                <h2>Question: What is a custom hook, and why will you create a custom hook?</h2>
                <p className='ms-4'>Answer: Custom hook is a special JavaScript function. It start with 'use'. There are many custom hook such as useState, useEffect, useCallback, etc.  By using custom hook we can share logic to components.</p>
            </div>

            <div className='text-center bg-secondary p-4 rounded mt-5'>
                <h2 className='mb-3'>Download PDF</h2>
                <button className='btn btn-danger'
                    onClick={downloadPDF}
                    disabled={!(loader === false)}
                >
                    {loader ? (<span>Downloading</span>) : (<span>Downloaded PDF</span>)}
                </button>
            </div>
        </div>
    );
};

export default Blog;
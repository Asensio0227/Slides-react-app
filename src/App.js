import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { people } from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [person, setPerson] = useState(people);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastSlide = person.length - 1;
    if (index < 0) {
      setIndex(lastSlide);
    }
    if (index > lastSlide) {
      setIndex(0);
    }
  }, [index, person]);

  useEffect(() => {
    const lastSlide = setInterval(() => {
      setIndex(index + 1);
    }, 10000)
    return () => {
      clearInterval(lastSlide);
    }
  },[index])

  return (
    <>
      <Navbar />
      <main>
        <section className="section-center">
          <div className="title">
            <h2>slides</h2>
            <div className="underline"></div>
          </div>
          <div className="container">
            {person.map((items, itemsIndex) => {
              const { id, img, name, text, job } = items;
              let position = 'next';
              if (itemsIndex === index) {
                position = 'active';
              }
              if (itemsIndex === index - 1 || (index === 0 && itemsIndex === person.length - 1)) {
                position = 'last';
              }
              return (
                <article key={id} className={position}>
                  <img src={img} alt={name} className="slide-img" />
                  <h3 className="author">{name}</h3>
                  <h4 className="job">{job}</h4>
                  <p className="text">{text}</p>
                  <span className="icon">
                    <FaQuoteRight/>
                  </span>
                </article>
              )
            })}
          </div>
          <div className="btn-container">
            <button onClick={() => setIndex(index - 1)} className="prev-btn">
              <FaChevronLeft/>
            </button>
            <button onClick={() => setIndex(index + 1)} className="next-btn">
              <FaChevronRight/>
            </button>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
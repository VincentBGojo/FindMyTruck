import './style.scss';
import Typewriter from 'typewriter-effect';



const TypeWriter_search = () => {
  
  return (
    <Typewriter
        options={{
          autoStart: true,
          loop: true,
          delay: 65,
        }}
      onInit={(typewriter) => {
        typewriter.typeString('Chercher un foodtruck à ...')
        .pauseFor(300)
        .deleteChars(3)
        .pauseFor(500)
        typewriter.typeString('Paris')
        .pauseFor(1000)
        .deleteChars(5)
        .pauseFor(500)
        typewriter.typeString('Mouais')
        .pauseFor(1000)
        .deleteChars(6)
        .pauseFor(500)
        typewriter.typeString('Bibiche')
        .pauseFor(1000)
        .deleteChars(7)
        .pauseFor(500)
        typewriter.typeString('Angoisse')
        .pauseFor(1000)
        .deleteChars(8)
        .pauseFor(500)
        typewriter.typeString('Poil')
        .pauseFor(1000)
        .deleteChars(4)
        .pauseFor(500)
        typewriter.typeString('Plaisir')
        .pauseFor(1000)
        .deleteChars(7)
        .pauseFor(500)
        typewriter.typeString('Les Croûtes')
        .pauseFor(1000)
        .deleteChars(11)
        .pauseFor(500)
        typewriter.typeString('Les Boulays')
        .pauseFor(1000)
        .deleteChars(11)
        .pauseFor(500)
        typewriter.typeString('Moisy')
        .pauseFor(1000)
        .deleteChars(5)
        .pauseFor(500)
        typewriter.typeString('Plurien')
        .pauseFor(1000)
        .deleteChars(7)
        .pauseFor(500)
        typewriter.typeString('Bizou')
        .pauseFor(1000)
        .deleteChars(5)
        .pauseFor(500)
        .start();
      }}
    />
    
  );
}

export default TypeWriter_search

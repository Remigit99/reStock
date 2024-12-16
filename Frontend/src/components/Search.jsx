import {TypeAnimation} from "react-type-animation"

const Search = () => {
  return (
    <div>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Search for Phones',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Search for Accesseries',
        1000,
        'Search for clothes',
        1000,
        'Search for Perfume',
        1000,
        'Search for Laptops',
        
        1000,
        'Search for Bag of Rice',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1rem', display: 'inline-block', color: "gray" }}
      repeat={Infinity}
    />
    </div>
  )
}

export default Search
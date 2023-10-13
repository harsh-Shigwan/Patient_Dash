const [selectedCategory, setSelectedCategory] = useState('All');
  useEffect(() => {
    filterCard(selectedCategory);
  }, [CardData]);

  const handleFilterChange = (e) => {
    const selectedValue = e.value;
    filterCard(selectedValue);
    setSelectedCategory(selectedValue);
  };
   const filterCard=(selectedValue)=>{
    if (selectedValue === 'All') {
      
      setItems(CardData);
      
    } else {
      const filtered = CardData.filter((elem) => elem.City === selectedValue);
      setItems(filtered);
    }
  };
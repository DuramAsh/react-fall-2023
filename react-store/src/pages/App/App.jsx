import React, { useEffect, useState } from 'react'
import SearchForm from '../../components/UI/SearchForm/SearchForm'
import Selector from "../../components/UI/Selector/Selector"
import Loader from "../../components/UI/Loader/Loader"
import classes from './App.module.css';
import ProductsList from "../../components/Products/ProductsList";
import Navbar from "../../components/Navbar/Navbar";
import Modal from "../../components/Modal/Modal";
import axios from 'axios'

const App = () => {
  const [selectedFilter, setSelectedFilter] = useState("Все товары")

  // fetch products from api
  const [apiProducts, setApiProducts] = useState([])
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState("")
  const [cart, setCart] = useState([])
  const [modal, setModal] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      // use axios
      const response = await axios.get('https://store-back-6ylx.onrender.com' + '/api/products')
      setProducts(response.data)
      setApiProducts(response.data)
      setIsLoading(false)
    }
    fetchProducts()
  }, [])

  useEffect(() => {
    const twoFilters = () => {
      setProducts(apiProducts.filter(product => product.title.toLowerCase().includes(query.toLowerCase()) && (product.category === selectedFilter || selectedFilter === "Все товары")))
    }
    setTimeout(() => {
      twoFilters()
    }, 100)
  }, [selectedFilter, query, apiProducts])

  const addToCart = (productId) => {
    if (cart.findIndex(product => product.id === productId) === -1)
      setCart([...cart, apiProducts.find(product2 => productId === product2.id)])
  }

  const deleteFromCart = (productId) => {
    setCart(cart.filter(product => productId !== product.id))
  }

  return !isLoading ?
    (<div className={classes.App}>
      <Navbar onClick={() => setModal(true)} />
      <Modal visible={modal} setVisible={setModal} cart={cart} deleteFromCart={deleteFromCart}></Modal>
      <SearchForm value={query} onChange={setQuery} />
      <Selector value={selectedFilter} onChange={setSelectedFilter} />
      <ProductsList products={products} onClick={addToCart} />
    </div>)
    : (<Loader/>);
}

export default App;

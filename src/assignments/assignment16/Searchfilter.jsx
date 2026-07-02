
import React, { useEffect, useState } from 'react'

const Searchfilter = () => {
  const [datas, setDatas] = useState([])
  const [unicat, setUnicat] = useState([])
  const [saveopt, setSaveopt] = useState("")
  const [sort, setSort] = useState("")
  const [search, setSearch] = useState("")

  const fetchdata = async () => {
    const getdata = await fetch("https://dummyjson.com/products")
    const change = await getdata.json()
    setDatas(change.products)

    const take = change.products.map((e) => e.category)
    const unikey = [...new Set(take)]
    setUnicat(unikey)
  }

  useEffect(() => {
    fetchdata()
  }, [])

  const handleopt = (e) => {
    setSaveopt(e.target.value)
  }

  const handlesort = (e) => {
    setSort(e.target.value)
  }

  const handlesearch = (e) => {
    setSearch(e.target.value)
  }

  let allvalue = [...datas]

  if (saveopt) {
    allvalue = allvalue.filter((e) => e.category === saveopt)
  }

  if (search) {
    allvalue = allvalue.filter((e) =>
      e.title.toLowerCase().includes(search.toLowerCase()),
    )
  }

  if (sort === 'asec') {
    allvalue = allvalue.sort((a, b) => a.price - b.price)
  }

  if (sort === 'dec') {
    allvalue = allvalue.sort((a, b) => b.price - a.price)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
       

        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Category</span>
            <select
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              onChange={handleopt}
              value={saveopt}
            >
              <option value="">Select All</option>
              {unicat.map((e, i) => (
                <option value={e} key={i}>
                  {e}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Sort</span>
            <select
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              value={sort}
              onChange={handlesort}
            >
              <option value="">Select all</option>
              <option value="asec">Low to High</option>
              <option value="dec">High to Low</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Search</span>
            <input
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={handlesearch}
            />
          </label>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {allvalue.length > 0 ? (
            allvalue.map((e) => (
              <div key={e.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>{e.category}</span>
                  <span className="font-semibold text-slate-900">${e.price}</span>
                </div>
                <h2 className="mt-4 text-lg font-semibold text-slate-900">{e.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{e.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
                  <span className="rounded-full border border-slate-200 px-3 py-1">Rating {e.rating}</span>
                  <span className="rounded-full border border-slate-200 px-3 py-1">Stock {e.stock}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center text-slate-600 shadow-sm">
              No products found. Try a different filter.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Searchfilter


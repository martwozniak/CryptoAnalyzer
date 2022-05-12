function App() {
  return (
    <div className="App ">
      <header className="App-heade">
        <div className="bg-slate-700 text-white px-8 py-4 flex gap-12 justify-between">
          <div className="flex gap-12">
            <div className="logo font-bold">Crypto Analyzer 📈</div>
            <div className="menu flex gap-6 ">
              <a href="exchange" className="hover:text-green-400">
                Exchange
              </a>
              <a href="exchange" className="hover:text-green-400">
                Features
              </a>
              <a href="exchange" className="hover:text-green-400">
                NFT
              </a>
              <a href="exchange" className="hover:text-green-400">
                Futures
              </a>
              <a href="exchange" className="hover:text-green-400">
                Wallet
              </a>
            </div>
          </div>

          <div className="login flex gap-6">
            <button className="bg-green-400 px-4 py-1 font-bold uppercase rounded-sm hover:bg-green-600">
              Sign up
            </button>
            <button className="font-semibold uppercase border px-4 py-1 rounded-sm hover:bg-green-800">
              Sign in
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="px-8 py-4">
          <div className="mx-w-50">
            <h1 className="text-3xl font-bold">
              Crypto<span className="text-green-400">Analyzer</span> 📈
            </h1>
            <div className="crypto-list">
              <table class="table-auto">
                <thead>
                  <tr>
                    <th>Crypto</th>
                    <th>Chart</th>
                    <th>Price $</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>BTC</td>
                    <td>Chart</td>
                    <td>33 600$</td>
                  </tr>
                  <tr>
                    <td>ETH</td>
                    <td>Chart</td>
                    <td>2 200</td>
                  </tr>
                  <tr>
                    <td>BNB</td>
                    <td>Chart</td>
                    <td>270 $</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

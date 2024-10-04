export default function Home() {
  return (
    <section>
      <div className="grid grid-cols-1 justify-items-center">
        <h1 className='text-3xl text-center font-bold mt-4'>Welcome to supplyChain</h1>
        <h2 className='text-base text-center mb-5'>Find out where your products have been</h2>
      </div>
      <div className="grid grid-cols-1 justify-items-center py-4">
        <div className='flex size-80  border-white rounded bg-gradient-to-r from-white mb-4'>
          <div>Card 1</div>
        </div>
        <div className='flex size-80  border-white rounded bg-gradient-to-r from-white mb-4'>
          <div>Card 2</div>
        </div>
        <div className='flex size-80  border-white rounded bg-gradient-to-r from-white mb-4'>
          <div>Card 3</div>
        </div>
        <div className='flex size-80  border-white rounded bg-gradient-to-r from-white mb-4'>
          <div>Card 4</div>
        </div>
      </div>
    </section>
  );
}

type image = {
  src : string
}

export const PageImage = ({src} : image) => {
  return (
  <div className="relative hidden flex-1 lg:block">
    <img
      className="h-full object-cover"
      src= {src}
      alt="imagem login/cadastro"
    />
  </div>
  )
}
//https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80
//https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80
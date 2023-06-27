import { authMiddleware } from "@clerk/nextjs"
import { redirectToSignIn } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export default authMiddleware( {
  afterAuth ( auth , req , evt ) { 
    // lida com usuários que não são autenticados
    if ( !auth.userId && !auth.isPublicRoute ) {   
      return redirectToSignIn( { returnBackUrl : req.url })
    }
    // redirecione-os para a página de seleção da organização
    if ( auth.userId && !auth.orgId && req.nextUrl.pathname !== "/org-selection" ) {  
      const orgSelection = new URL ('/org-selection' , req.url )  
      return NextResponse.redirect(orgSelection)
    }
  },
  publicRoutes : [ "/","/questions","/blog" ]
}
)

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
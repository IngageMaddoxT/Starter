using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

using System;
using System.Data;
using System.Web;

//using System.Collections.Generic;
//using System.Configuration;
//using System.IdentityModel.Protocols.WSTrust;
//using System.IdentityModel.Services;
//using System.IdentityModel.Tokens;
//using System.IO;
//using System.Linq;
//using System.Net;
//using System.Security.Claims;
//using System.ServiceModel;
//using System.ServiceModel.Description;
//using System.ServiceModel.Security;
//using System.Web.Http;
//using System.Xml;
//using Thinktecture.IdentityModel.Constants;
//using Thinktecture.IdentityModel.WSTrust;
//using WebApi_AngularJs.Model;
using System.Web.SessionState;

namespace ProjectTemplate.Controllers.API
{
    public class LoginController : ApiController
    {
        [ResponseType(typeof(Dictionary<string, object>))]
        public IHttpActionResult Post([FromBody]Credentials cred)
        {
            //var response = new LoginResponse();

            //if (claims != null)
            //    if (id == 1)
            //    {
            //        return this.NotFound();
            //    }

            var d = new Dictionary<string, object>
            {
                {"id", 27},
                {"username", "tmaddox"},
                {"Email", "tony.maddox@ingagepartners.com"},
                {"FirstName", "Tony"},
                {"LastName", "Maddox"},
                {"ZipCode", "45242"}
            };


            return this.Ok(d);
        }
    }

    public class Credentials
    {
        public string username { get; set; }
        public string password { get; set; }
    }
}

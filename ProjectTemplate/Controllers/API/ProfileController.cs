using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace ProjectTemplate.Controllers.API
{
    public class ProfileController : ApiController
    {
        [ResponseType(typeof(Dictionary<string, object>))]
        public IHttpActionResult Get(int id)
        {
            if (id == 1)
            {
                return this.NotFound();
            }

            var d = new Dictionary<string, object>
            {
                {"id", 27},
                {"Email", "tony.maddox@ingagepartners.com"},
                {"FirstName", "Tony"},
                {"LastName", "Maddox"},
                {"ZipCode", "45242"}
            };

            return this.Ok(d);
        }
    }
}

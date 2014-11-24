using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace Web.Controllers.ApiControllers
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

        ////move to shared location, across controllers
        //private static dynamic DecodeJson(string json)
        //{
        //    var obj = System.Web.Helpers.Json.Decode(json);
        //    if (obj.GetType() == typeof(System.Web.Helpers.DynamicJsonArray))
        //    {
        //        dynamic[] array = obj;
        //        if (array.Length == 1)
        //        {
        //            return array[0];
        //        }
        //    }
        //    //should probably throw error here
        //    return null;
        //}
    }

    //if we keep something like this move to model directory
    //public class Person
    //{
    //    public string Name { get; set; }
    //    public string LastName { get; set; }
    //}
}

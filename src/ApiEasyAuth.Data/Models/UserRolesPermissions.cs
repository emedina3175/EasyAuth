namespace ApiEasyAuth.Data
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class UserRolesPermissions
    {
        public int Id { get; set; }

        [Required]
        [StringLength(128)]
        public string UserId { get; set; }

        [Required]
        [StringLength(128)]
        public string RoleId { get; set; }

        public bool Create { get; set; }

        public bool Alter { get; set; }

        public bool Delete { get; set; }

        public bool Read { get; set; }

        [Required]
        [StringLength(128)]
        public string UserAdd { get; set; }

        public DateTime DateAdd { get; set; }

        [StringLength(128)]
        public string UserUpd { get; set; }

        public DateTime? DateUpd { get; set; }

        public virtual AspNetRoles AspNetRoles { get; set; }

        public virtual AspNetUsers AspNetUsers { get; set; }
    }
}

using DAL;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DAL
{
    public class DataManager : IDisposable
    {
        private DbScheme context = new DbScheme();

        private GenericRepository<AspNetUsers> usersRepository;
        private GenericRepository<UserRolesPermissions> userRolesPermissionsRepository;
        private GenericRepository<AspNetRoles> rolesRepository;

        /// <summary>
        /// Execute T-SQL that returns rows
        /// </summary>
        /// <param name="sql">T-SQL</param>
        /// <param name="parameters">Different parameters that manage in the instruction</param>
        /// <returns>Return a collection of the object specified</returns>
        public virtual async Task<IEnumerable<T>> ExecuteQueryAsync<T>(string sql, params object[] parameters) where T : class
        {
            List<T> model = new List<T>();
            model = await context.Database.SqlQuery<T>(sql, parameters).ToListAsync();

            return model;
        }

        /// <summary>
        /// Creating repository to drive Users
        /// </summary>
        public GenericRepository<AspNetUsers> Users
        {
            get
            {

                if (this.usersRepository == null)
                {
                    this.usersRepository = new GenericRepository<AspNetUsers>(context);
                }
                return usersRepository;
            }
        }

        /// <summary>
        /// Creating repository to drive Users Permissions
        /// </summary>
        public GenericRepository<UserRolesPermissions> UserRolesPermissions
        {
            get
            {

                if (this.userRolesPermissionsRepository == null)
                {
                    this.userRolesPermissionsRepository = new GenericRepository<UserRolesPermissions>(context);
                }
                return userRolesPermissionsRepository;
            }
        }

        /// <summary>
        /// Creating repository to drive Roles
        /// </summary>
        public GenericRepository<AspNetRoles> Roles
        {
            get
            {

                if (this.rolesRepository == null)
                {
                    this.rolesRepository = new GenericRepository<AspNetRoles>(context);
                }
                return rolesRepository;
            }
        }

        public void Save()
        {
            context.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}

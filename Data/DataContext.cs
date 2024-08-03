using System.Data.Common;
using JournalApp.Entities;

namespace JournalApp.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {

    }

    public DbSet<JournalEntry> JournalEntries { get; set; }
}
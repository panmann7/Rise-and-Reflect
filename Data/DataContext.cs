using JournalApp.Entities;
using Microsoft.EntityFrameworkCore;

namespace JournalApp.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {

    }

    public DbSet<JournalEntry> JournalEntries { get; set; }
}
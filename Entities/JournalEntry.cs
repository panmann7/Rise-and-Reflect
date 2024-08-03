namespace JournalApp.Entities;

public class JournalEntry
{
    public required string Date { get; set; }
    public required string Time { get; set; }
    public required string Entry { get; set; }
}

using System;
using Microsoft.EntityFrameworkCore;
using DotNetReactMicroBlog.Api.Models;

namespace DotNetReactMicroBlog.Api.Services
{
    public class MicroBlogContext : DbContext
    {
        public MicroBlogContext(DbContextOptions<MicroBlogContext> options) : base(options) {}

        public DbSet<Author> Authors { get; set; }
        public DbSet<Article> Articles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Author>().HasData(
                new Author
                {
                    AuthorId = 1,
                    Name = "Stewart Lee"
                }
            );
            modelBuilder.Entity<Article>().HasData(
                new Article
                {
                    ArticleId = 1,
                    AuthorId = 1,
                    Created = DateTime.Now,
                    Title = "How to treat Morrissey? Stop listening to him",
                    Subtitle = "It’s hard when our idols disappoint us. But as it happened, my break from the former Smiths frontman came easily…",
                    Content = "Morrissey fans have for years equated his more unpalatable pronouncements with the babblings of a beloved but out of touch relative. Some of the things Uncle Stephen says seem a bit racist, but he has seen a lot of changes in the area he lives in, he got food poisoning from a bad curry on the Bristol Road in 1978, and he says he couldn’t get on Top of the Pops in the 80s because he wasn’t black.",
                },
                new Article
                {
                    ArticleId = 2,
                    AuthorId = 1,
                    Created = DateTime.Now,
                    Title = "American Cornish pasties? Did King Arthur die for this?",
                    Subtitle = "Without EU food protection rules, what’s to stop American producers faking our sacred baked goods?",
                    Content = "Say “Cornwall” to an uncontacted pygmy brave deep in a New Zealand forest and his bamboo flute will swiftly carve the shape of the Cornish pasty into the Shotover riverbank sands. “Oggy, oggy, oggy,” he will cry, as he mimes pushing a too-hot Cornish pasty into his unambiguously delighted face. “Oggy, oggy, oggy!”",
                },
                new Article
                {
                    ArticleId = 3,
                    AuthorId = 1,
                    Created = DateTime.Now,
                    Title = "Kim Jong-un’s happiness is just a great mini-break away",
                    Subtitle = "The North Korean leader needs discipline; Donald Trump needs love. If only they could get together for a holiday of a lifetime",
                    Content = "At the beginning of the current decade I was often mistaken for the then North Korean dictator-in-waiting Kim Jong-un, which led to an embarrassing incident in a pet shop on Dalston High Road in February 2009. Needless to say, I was unable to convince the Polish lady behind the counter that I was merely looking for a canine companion for my elderly aunt, and did not in fact regard labradoodle puppies as a “superfood”.",
                },
                new Article
                {
                    ArticleId = 4,
                    AuthorId = 1,
                    Created = DateTime.Now,
                    Title = "In Mel and Sue, the true spirit of punk lives on",
                    Subtitle = "The heroic Bake Off presenters will forever be remembered by today’s disenfranchised young people",
                    Content = "Paul Hollywood is named after a stupid place. And Mary Berry changed her surname to that of a popular cake ingredient in 1970, in a self-abasing quest for self-raising fame. We expect little moral guidance from either Hollywood or Berry, and we receive none in return.",
                },
                new Article
                {
                    ArticleId = 5,
                    AuthorId = 1,
                    Created = DateTime.Now,
                    Title = "Pity David Attenborough – the BBC’s Galápagos tortoise",
                    Subtitle = "Do hard-shelled heroes now gaze upon Attenborough with sympathy, knowing that the landscape he once thrived in will be stripped away by the free market?",
                    Content = "In 1997 I looked into the pre-atomic age eyes of Harriet, the then 166-year-old Galápagos tortoise, in an Australian zoo, and saw myself reflected back, a traveller in time. And earlier this year, I looked into the pre-digital-age eyes of David Attenborough, on the platform of Oxford station, and saw myself reflected back, a traveller on the 11.59 to Paddington.",
                },
                new Article
                {
                    ArticleId = 6,
                    AuthorId = 1,
                    Created = DateTime.Now,
                    Title = "The best gig I ever saw: Stewart Lee on the Fall, Cornwall, 1984",
                    Subtitle = "I realise that the rest of my life, that can have such profound and disorientating pleasures in it, is going to be both wonderful and frightening",
                    Content = "It was the summer of 1984. I was 16. I wanted, finally, to see the Fall. I’d been fixated on the group since a 1981 Peel session suddenly flipped somehow from irritating me beyond reason to enthralling me beyond imagination. Provocative repetition. Monotonous drones. Withering sarcasm. I’m lucky I was struck by something so utterly superb when I was in my culturally vulnerable teenage state, otherwise you could be sitting here reading an article about Toto.",
                }
            );
        }
    }
}
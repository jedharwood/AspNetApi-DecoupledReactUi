﻿// <auto-generated />
using System;
using DotNetReactMicroBlog.Api.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace DotNetReactMicroBlog.Api.Migrations
{
    [DbContext(typeof(MicroBlogContext))]
    [Migration("20220925004609_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.17")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            modelBuilder.Entity("DotNetReactMicroBlog.Api.Models.Article", b =>
                {
                    b.Property<int>("ArticleId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int>("AuthorId")
                        .HasColumnType("integer");

                    b.Property<string>("Content")
                        .HasColumnType("text");

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("Subtitle")
                        .HasColumnType("text");

                    b.Property<string>("Title")
                        .HasColumnType("text");

                    b.HasKey("ArticleId");

                    b.HasIndex("AuthorId");

                    b.ToTable("Articles");

                    b.HasData(
                        new
                        {
                            ArticleId = 1,
                            AuthorId = 1,
                            Content = "Morrissey fans have for years equated his more unpalatable pronouncements with the babblings of a beloved but out of touch relative. Some of the things Uncle Stephen says seem a bit racist, but he has seen a lot of changes in the area he lives in, he got food poisoning from a bad curry on the Bristol Road in 1978, and he says he couldn’t get on Top of the Pops in the 80s because he wasn’t black.",
                            Created = new DateTime(2022, 9, 25, 9, 46, 8, 429, DateTimeKind.Local).AddTicks(8160),
                            Subtitle = "It’s hard when our idols disappoint us. But as it happened, my break from the former Smiths frontman came easily…",
                            Title = "How to treat Morrissey? Stop listening to him"
                        },
                        new
                        {
                            ArticleId = 2,
                            AuthorId = 1,
                            Content = "Say “Cornwall” to an uncontacted pygmy brave deep in a New Zealand forest and his bamboo flute will swiftly carve the shape of the Cornish pasty into the Shotover riverbank sands. “Oggy, oggy, oggy,” he will cry, as he mimes pushing a too-hot Cornish pasty into his unambiguously delighted face. “Oggy, oggy, oggy!”",
                            Created = new DateTime(2022, 9, 25, 9, 46, 8, 440, DateTimeKind.Local).AddTicks(710),
                            Subtitle = "Without EU food protection rules, what’s to stop American producers faking our sacred baked goods?",
                            Title = "American Cornish pasties? Did King Arthur die for this?"
                        },
                        new
                        {
                            ArticleId = 3,
                            AuthorId = 1,
                            Content = "At the beginning of the current decade I was often mistaken for the then North Korean dictator-in-waiting Kim Jong-un, which led to an embarrassing incident in a pet shop on Dalston High Road in February 2009. Needless to say, I was unable to convince the Polish lady behind the counter that I was merely looking for a canine companion for my elderly aunt, and did not in fact regard labradoodle puppies as a “superfood”.",
                            Created = new DateTime(2022, 9, 25, 9, 46, 8, 440, DateTimeKind.Local).AddTicks(740),
                            Subtitle = "The North Korean leader needs discipline; Donald Trump needs love. If only they could get together for a holiday of a lifetime",
                            Title = "Kim Jong-un’s happiness is just a great mini-break away"
                        },
                        new
                        {
                            ArticleId = 4,
                            AuthorId = 1,
                            Content = "Paul Hollywood is named after a stupid place. And Mary Berry changed her surname to that of a popular cake ingredient in 1970, in a self-abasing quest for self-raising fame. We expect little moral guidance from either Hollywood or Berry, and we receive none in return.",
                            Created = new DateTime(2022, 9, 25, 9, 46, 8, 440, DateTimeKind.Local).AddTicks(740),
                            Subtitle = "The heroic Bake Off presenters will forever be remembered by today’s disenfranchised young people",
                            Title = "In Mel and Sue, the true spirit of punk lives on"
                        },
                        new
                        {
                            ArticleId = 5,
                            AuthorId = 1,
                            Content = "In 1997 I looked into the pre-atomic age eyes of Harriet, the then 166-year-old Galápagos tortoise, in an Australian zoo, and saw myself reflected back, a traveller in time. And earlier this year, I looked into the pre-digital-age eyes of David Attenborough, on the platform of Oxford station, and saw myself reflected back, a traveller on the 11.59 to Paddington.",
                            Created = new DateTime(2022, 9, 25, 9, 46, 8, 440, DateTimeKind.Local).AddTicks(750),
                            Subtitle = "Do hard-shelled heroes now gaze upon Attenborough with sympathy, knowing that the landscape he once thrived in will be stripped away by the free market?",
                            Title = "Pity David Attenborough – the BBC’s Galápagos tortoise"
                        },
                        new
                        {
                            ArticleId = 6,
                            AuthorId = 1,
                            Content = "It was the summer of 1984. I was 16. I wanted, finally, to see the Fall. I’d been fixated on the group since a 1981 Peel session suddenly flipped somehow from irritating me beyond reason to enthralling me beyond imagination. Provocative repetition. Monotonous drones. Withering sarcasm. I’m lucky I was struck by something so utterly superb when I was in my culturally vulnerable teenage state, otherwise you could be sitting here reading an article about Toto.",
                            Created = new DateTime(2022, 9, 25, 9, 46, 8, 440, DateTimeKind.Local).AddTicks(750),
                            Subtitle = "I realise that the rest of my life, that can have such profound and disorientating pleasures in it, is going to be both wonderful and frightening",
                            Title = "The best gig I ever saw: Stewart Lee on the Fall, Cornwall, 1984"
                        });
                });

            modelBuilder.Entity("DotNetReactMicroBlog.Api.Models.Author", b =>
                {
                    b.Property<int>("AuthorId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("AuthorId");

                    b.ToTable("Authors");

                    b.HasData(
                        new
                        {
                            AuthorId = 1,
                            Name = "Stewart Lee"
                        });
                });

            modelBuilder.Entity("DotNetReactMicroBlog.Api.Models.Article", b =>
                {
                    b.HasOne("DotNetReactMicroBlog.Api.Models.Author", "Author")
                        .WithMany()
                        .HasForeignKey("AuthorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Author");
                });
#pragma warning restore 612, 618
        }
    }
}

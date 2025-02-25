function set_featured_art() {
    let artworks = [
        "url('src/img/works/personal/2023/CurlyBrace_CaveStory_x1.png')",
        "url('src/img/works/personal/2023/RimuruTempestGluttony_x1.png')",
        "url('src/img/works/personal/2023/shondodarksouls_x1.png')",
        "url('src/img/works/personal/2023/sunny_bust_x1.png')",
        "url('src/img/works/personal/2024/chibidoki_silly_plush_0_x1.png')",
        "url('src/img/works/personal/2024/hatsune_miku_swagapino_x1.png')",
        "url('src/img/works/personal/2024/Kirby_Wallpaper_x1.png')",
        "url('src/img/works/personal/2024/kikuri_hiroi_portrait_x1.png')",
        "url('src/img/works/personal/2024/mongirl_0_0_x1.png')",
        "url('src/img/works/personal/2024/mongirl_1_0_x1.png')",
        "url('src/img/works/personal/2024/mongirl_0_2_x1.png')",
        "url('src/img/works/personal/2024/chibidoki_silly_plush_1_x1.png')",
        "url('src/img/works/personal/2024/chibidoki_silly_plush_2_x1.png')",
        "url('src/img/works/personal/2024/sonia_strumm_mmsf_x1.png')",
        "url('src/img/works/personal/2024/Serenity_XP_Landscape_x1.png')",
        "url('src/img/works/personal/2024/Serenity_XP_x1.png')",
        "url('src/img/works/personal/2024/nagato_yuki_pc98_x1.png')",
        "url('src/img/works/personal/2024/pokemon_pikachu_pichu_x1.png')",
        "url('src/img/works/personal/2024/shion_tensura_x1.png')",
        "url('src/img/works/personal/2024/tsuyomi_icecream_x1.png')",
        "url('src/img/works/personal/2024/tsuyomi_tears.png')",
        "url('src/img/works/commissions/2023/Sleepy_sketch_x1.png')",
        "url('src/img/works/commissions/2024/Akira_sketch_glasses.png')",
        "url('src/img/works/challenges/ArtFight/2023/Viola_x1.png')",
        "url('src/img/works/challenges/FightingCollab/oc fighting collab FINAL x1 fix.png')",
        "url('src/img/works/challenges/FightingCollab/1st_Tsuyomi_Appearance_x1.png')",
        "url('src/img/works/challenges/GameJam/frogtwistmockup_x1.png')",
        "url('src/img/works/challenges/MockupJam/00_Level_1_Mockup_new_x1_04-FINAL.png')",
        "url('src/img/works/challenges/PixelDailies/Pixel_Dailies_Thin_Curly_Sorcerer.png')",
        "url('src/img/works/challenges/PixelJoint/00_Fist_Train_FINAL_x1.png')",
        "url('src/img/works/challenges/PixelJoint/05_Iconic_Desktop_wo_bg_x1.png')",
        "url('src/img/works/challenges/PixelJoint/02_Adventurers_Full_Party!_wo_bg_x1.png')",
        "url('src/img/works/challenges/PixelJoint/01_Baby_Yoda_Stories_Mockup_FINAL_x1_UPDATED.png')",
        "url('src/img/works/challenges/Requests/holly_michdev_x1.png')",
        "url('src/img/works/challenges/Requests/miseree_x1.png')",
    ]
    
    let random = Math.floor(Math.random() * artworks.length);
    let featured_art = artworks[random];
    let featured_art_window = document.querySelector('.featuredArt');

    featured_art_window.style.backgroundImage = featured_art;
}

set_featured_art();

document.addEventListener("visibilitychange", function() {
    if (!document.hidden) { setInterval(set_featured_art, 120000); }
});

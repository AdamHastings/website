<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['pwd'])) {
        $password = $_POST['pwd'];

        if (strtolower($password) === 'mephistopheles') {
            $response = array(
                'success' => true,
                'html' => '
                    <!-- This is my way of saying hello, because I can\'t do it face to face... --> <br>
                    <div>
                    <p>
                        Hey, you made it. Congrats on solving the two easy (too easy?) puzzles. 
                    </p>
                    <p>
                        I upload my monthly playlists to my Spotify profile <a href="https://open.spotify.com/user/1267021586" target="_blank" rel="noopener noreferrer" class="link-class">here</a>.
                        For the compressed version, below is a playlist of 100 songs I often have on repeat (one song per artist, sorted alphabetically). 
                    </p>
                    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/68mmKV6b3gUiuLEU5r3hcb?utm_source=generator" width="100%" height="1000" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

                    </div>
                '
            );
        } else {
            $response = array('success' => false);
        }
    } else {
        $response = array('success' => false, 'message' => 'Password is required.');
    }
} else {
    $response = array('success' => false, 'message' => 'Invalid request method.');
}

header('Content-Type: application/json');
echo json_encode($response);
?>
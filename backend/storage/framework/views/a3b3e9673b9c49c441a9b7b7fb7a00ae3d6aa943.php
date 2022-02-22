<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Export to PDF</title>
</head>
<body>
    
    <table>

        
        <thead><tr>
            <th>Composer</th>
            <th>Title</th>
            <th>String project</th>
            <th>Orchestration total</th>
    <th>Duration</th>   
    

        </tr></thead>

    <tbody>
        <?php $__currentLoopData = $playlist; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $playlists): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <tr>
            <td><?php echo e($playlists->composers->nameComposer); ?> 
                <?php echo e($playlists->composers->surnameComposer); ?></td>
            <td><?php echo e($playlists->works->nameWork); ?></td>
            <td><?php echo e($playlists->stringProject); ?></td>
            <td><?php echo e($playlists->orchestrationTotal); ?></td>
            <td><?php echo e($playlists->works->duration); ?></td>
            

            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </tr>
    </tbody>
     
    </table>
</body>
</html><?php /**PATH C:\Users\Isaiah DAM TARDE\Desktop\OFGC app\AuditorioIonicLaravel\backend\resources\views/playlists.blade.php ENDPATH**/ ?>
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
            <th>ID</th>
            <th>Name</th>
            <th>Title</th>

        </tr></thead>

    <tbody>
        <?php $__currentLoopData = $director; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $directors): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <tr>
            <td><?php echo e($directors->id); ?></td>
            <td><?php echo e($directors->nameDirector); ?></td>
            <td><?php echo e($directors->titleDirector); ?></td>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </tr>
    </tbody>
     
    </table>
</body>
</html><?php /**PATH C:\Users\Isaiah DAM TARDE\Desktop\OFGC app\AuditorioIonicLaravel\backend\resources\views/directors.blade.php ENDPATH**/ ?>